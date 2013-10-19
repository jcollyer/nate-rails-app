json.array!(@biblebooks) do |biblebook|
  json.extract! biblebook, :name, :testament, :position
  json.url biblebook_url(biblebook, format: :json)
end