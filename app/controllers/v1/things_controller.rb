class V1::ThingsController < ApplicationController
  def index
    render json: {
      things: [
        {
          name: 'server1',
          guid: SecureRandom.uuid
        },
        {
          name: 'server2',
          guid: SecureRandom.uuid
        }
      ]
    }
  end
end
