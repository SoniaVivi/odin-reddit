require 'rails_helper'

describe 'posts association' do
  it { expect(User.reflect_on_association(:posts).macro).to eq(:has_many) }
end
