class V1::ThingsController < ApplicationController
  def index
    render json: {
      thing: [
        {
          name: 'test',
          uuid: SecureRandom.uuid
        }
      ]
    }
  end
end
