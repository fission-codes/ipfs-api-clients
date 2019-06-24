-module(swagger_ping_api).

-export([ping_get/1, ping_get/2]).

-define(BASE_URL, "").

%% @doc 
%% 
-spec ping_get(ctx:ctx()) -> {ok, swagger_pong:swagger_pong(), swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
ping_get(Ctx) ->
    ping_get(Ctx, #{}).

-spec ping_get(ctx:ctx(), maps:map()) -> {ok, swagger_pong:swagger_pong(), swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
ping_get(Ctx, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = get,
    Path = ["/ping"],
    QS = [],
    Headers = [],
    Body1 = [],
    ContentTypeHeader = swagger_utils:select_header_content_type([]),
    Opts = maps:get(hackney_opts, Optional, []),

    swagger_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).


