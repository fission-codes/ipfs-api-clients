# NOTE: This class is auto generated by the swagger code generator program.
# https://github.com/swagger-api/swagger-codegen.git
# Do not edit the class manually.

defmodule FISSION.Connection do
  @moduledoc """
  Handle Tesla connections for FISSION.
  """

  use Tesla

  # Add any middleware here (authentication)
  plug Tesla.Middleware.BaseUrl, "https://hostless.dev"
  plug Tesla.Middleware.Headers, %{"User-Agent" => "Elixir"}
  plug Tesla.Middleware.EncodeJson

  @doc """
  Configure an client connection using Basic authentication.

  ## Parameters

  - username (String): Username used for authentication
  - password (String): Password used for authentication

  # Returns

  Tesla.Env.client
  """
  @spec new(String.t, String.t) :: Tesla.Env.client
  def new(username, password) do
    Tesla.build_client([
      {Tesla.Middleware.BasicAuth, %{username: username, password: password}}
    ])
  end
  @doc """
  Configure an authless client connection

  # Returns

  Tesla.Env.client
  """
  @spec new() :: Tesla.Env.client
  def new do
    Tesla.build_client([])
  end
end
