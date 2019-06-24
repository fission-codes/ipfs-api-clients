use std::rc::Rc;

use hyper;
use super::configuration::Configuration;

pub struct APIClient<C: hyper::client::Connect> {
  configuration: Rc<Configuration<C>>,
  heroku_api: Box<::apis::HerokuApi>,
  ipfs_api: Box<::apis::IPFSApi>,
  ping_api: Box<::apis::PingApi>,
}

impl<C: hyper::client::Connect> APIClient<C> {
  pub fn new(configuration: Configuration<C>) -> APIClient<C> {
    let rc = Rc::new(configuration);

    APIClient {
      configuration: rc.clone(),
      heroku_api: Box::new(::apis::HerokuApiClient::new(rc.clone())),
      ipfs_api: Box::new(::apis::IPFSApiClient::new(rc.clone())),
      ping_api: Box::new(::apis::PingApiClient::new(rc.clone())),
    }
  }

  pub fn heroku_api(&self) -> &::apis::HerokuApi{
    self.heroku_api.as_ref()
  }

  pub fn ipfs_api(&self) -> &::apis::IPFSApi{
    self.ipfs_api.as_ref()
  }

  pub fn ping_api(&self) -> &::apis::PingApi{
    self.ping_api.as_ref()
  }


}
