class Api::ResponsesController < ApplicationController
  def create
    rsvp = Response.new(response_params)
    if rsvp.save
      render json: rsvp
    else
      render json: rsvp.errors.full_messages, status: 422
    end
  end

  def index
    render json: Response.all
  end

  private
  def response_params
    params.require(:response).permit(:first_name, :last_name, :attending, :comments)
  end
end
