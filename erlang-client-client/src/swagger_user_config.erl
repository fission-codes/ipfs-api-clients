-module(swagger_user_config).

-export([encode/1]).

-export_type([swagger_user_config/0]).

-type swagger_user_config() ::
    #{ 'INTERPLANETARY_FISSION_URL' := binary(),
       'INTERPLANETARY_FISSION_USERNAME' := binary(),
       'INTERPLANETARY_FISSION_PASSWORD' := swagger_secret:swagger_secret()
     }.

encode(#{ 'INTERPLANETARY_FISSION_URL' := INTERPLANETARYFISSIONURL,
          'INTERPLANETARY_FISSION_USERNAME' := INTERPLANETARYFISSIONUSERNAME,
          'INTERPLANETARY_FISSION_PASSWORD' := INTERPLANETARYFISSIONPASSWORD
        }) ->
    #{ 'INTERPLANETARY_FISSION_URL' => INTERPLANETARYFISSIONURL,
       'INTERPLANETARY_FISSION_USERNAME' => INTERPLANETARYFISSIONUSERNAME,
       'INTERPLANETARY_FISSION_PASSWORD' => INTERPLANETARYFISSIONPASSWORD
     }.
