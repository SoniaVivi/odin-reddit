require 'rails_helper'

describe 'posts association' do
  it { expect(Origin.reflect_on_association(:posts).macro).to eq(:has_many) }
end
