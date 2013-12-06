json.array!(@abouts) do |about|
  json.extract! about, :body
  json.url about_url(about, format: :json)
end