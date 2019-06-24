-module(swagger_heroku_api).

-export([heroku_resources_post/2, heroku_resources_post/3]).

-define(BASE_URL, "").

%% @doc 
%% 
-spec heroku_resources_post(ctx:ctx(), swagger_provision_request:swagger_provision_request()) -> {ok, swagger_heroku_provision:swagger_heroku_provision(), swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
heroku_resources_post(Ctx, Body) ->
    heroku_resources_post(Ctx, Body, #{}).

-spec heroku_resources_post(ctx:ctx(), swagger_provision_request:swagger_provision_request(), maps:map()) -> {ok, swagger_heroku_provision:swagger_heroku_provision(), swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
heroku_resources_post(Ctx, Body, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = post,
    Path = ["/heroku/resources"],
    QS = [],
    Headers = [],
    Body1 = Body,
    ContentTypeHeader = swagger_utils:select_header_content_type([<<"application/json;charset&#x3D;utf-8">>]),
    Opts = maps:get(hackney_opts, Optional, []),

    swagger_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).


