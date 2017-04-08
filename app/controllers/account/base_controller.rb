module Account
  class BaseController < ApplicationController
    before_action :authenticate_user!

    private

    def not_found
      raise ActionController::RoutingError, 'Page Not Found'
    end
  end
end
