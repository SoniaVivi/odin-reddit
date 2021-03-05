require 'rails_helper'

describe 'Poster association' do
  it { expect(Post.reflect_on_association(:poster).macro).to eq(:belongs_to) }
end
describe 'Origin association' do
  it { expect(Post.reflect_on_association(:origin).macro).to eq(:belongs_to) }
end
describe 'Comment association' do
  it { expect(Post.reflect_on_association(:comments).macro).to eq(:has_many) }
end
