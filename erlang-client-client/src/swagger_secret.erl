-module(swagger_secret).

-export([encode/1]).

-export_type([swagger_secret/0]).

-type swagger_secret() ::
    #{ 
     }.

encode(#{ 
        }) ->
    #{ 
     }.
