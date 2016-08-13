class StaticPagesController < ApplicationController
  def root
  end

  def admin
    @responses = Response.all.order("attending")
  end
end
