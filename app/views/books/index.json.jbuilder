json.array!(@books) do |book|
  json.extract! book, :title, :body, :buylink
  json.url book_url(book, format: :json)
end