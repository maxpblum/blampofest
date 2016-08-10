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

class Response < ActiveRecord::Base
  validates :first_name, :last_name, presence: true
  validates :attending, inclusion: { in: [true, false] }
end
