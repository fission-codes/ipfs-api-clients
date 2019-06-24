-module(swagger_provision_request).

-export([encode/1]).

-export_type([swagger_provision_request/0]).

-type swagger_provision_request() ::
    #{ 'callbackUrl' := binary(),
       'name' := binary(),
       'plan' := swagger_tier:swagger_tier(),
       'region' := swagger_region:swagger_region(),
       'uuid' := swagger_u_uid:swagger_u_uid()
     }.

encode(#{ 'callbackUrl' := CallbackUrl,
          'name' := Name,
          'plan' := Plan,
          'region' := Region,
          'uuid' := Uuid
        }) ->
    #{ 'callbackUrl' => CallbackUrl,
       'name' => Name,
       'plan' => Plan,
       'region' => Region,
       'uuid' => Uuid
     }.
