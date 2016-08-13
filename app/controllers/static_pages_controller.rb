class StaticPagesController < ApplicationController
  def root
  end

  def admin
    @yeses = Response.where(attending: true)
    @nos = Response.where(attending: false)
  end
end
