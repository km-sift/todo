describe TodosController, type: :controller do
  describe '#reporting' do
    let(:done_todos) do
      rand(1..10).times do
        Todo.create(done: true)
      end
    end
    let(:not_done_todos) do
      rand(1..10).times do
        Todo.create
      end
    end

    it 'responds with number of done and not done todos' do
      get :reporting, params: { format: 'json' }
      expect(response.body).to eql({ done: done_todos, num_not_done: not_done_todos }.to_json)
    end
  end
end
