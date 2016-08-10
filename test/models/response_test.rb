# == Schema Information
#
# Table name: responses
#
#  id         :integer          not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  attending  :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ResponseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
