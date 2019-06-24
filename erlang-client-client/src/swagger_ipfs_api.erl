-module(swagger_ipfs_api).

-export([ipfs_peers_get/1, ipfs_peers_get/2,
         ipfs_post/2, ipfs_post/3]).

-define(BASE_URL, "").

%% @doc 
%% 
-spec ipfs_peers_get(ctx:ctx()) -> {ok, [swagger_i_pfs_peer:swagger_i_pfs_peer()], swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
ipfs_peers_get(Ctx) ->
    ipfs_peers_get(Ctx, #{}).

-spec ipfs_peers_get(ctx:ctx(), maps:map()) -> {ok, [swagger_i_pfs_peer:swagger_i_pfs_peer()], swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
ipfs_peers_get(Ctx, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = get,
    Path = ["/ipfs/peers"],
    QS = [],
    Headers = [],
    Body1 = [],
    ContentTypeHeader = swagger_utils:select_header_content_type([]),
    Opts = maps:get(hackney_opts, Optional, []),

    swagger_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).

%% @doc 
%% 
-spec ipfs_post(ctx:ctx(), binary()) -> {ok, swagger_i_pfs_address:swagger_i_pfs_address(), swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
ipfs_post(Ctx, File) ->
    ipfs_post(Ctx, File, #{}).

-spec ipfs_post(ctx:ctx(), binary(), maps:map()) -> {ok, swagger_i_pfs_address:swagger_i_pfs_address(), swagger_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), swagger_utils:response_info()}.
ipfs_post(Ctx, File, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = post,
    Path = ["/ipfs"],
    QS = lists:flatten([{<<"file">>, File}])++swagger_utils:optional_params([], _OptionalParams),
    Headers = [],
    Body1 = [],
    ContentTypeHeader = swagger_utils:select_header_content_type([<<"multipart/form-data">>]),
    Opts = maps:get(hackney_opts, Optional, []),

    swagger_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).


