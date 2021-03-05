require 'rails_helper'

describe 'comment associations' do
  it do
    expect(Comment.reflect_on_association(:poster).macro).to eq(:belongs_to)
  end
  it { expect(Comment.reflect_on_association(:post).macro).to eq(:belongs_to) }
  it do
    expect(Comment.reflect_on_association(:parent).macro).to eq(:belongs_to)
  end
  it do
    expect(Comment.reflect_on_association(:children).macro).to eq(:has_many)
  end
end
