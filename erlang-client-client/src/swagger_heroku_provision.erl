-module(swagger_heroku_provision).

-export([encode/1]).

-export_type([swagger_heroku_provision/0]).

-type swagger_heroku_provision() ::
    #{ 'id' := swagger_user_id:swagger_user_id(),
       'config' := swagger_user_config:swagger_user_config(),
       'message' => binary()
     }.

encode(#{ 'id' := Id,
          'config' := Config,
          'message' := Message
        }) ->
    #{ 'id' => Id,
       'config' => Config,
       'message' => Message
     }.
