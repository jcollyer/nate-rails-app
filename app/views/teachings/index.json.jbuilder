json.array!(@teachings) do |teaching|
  json.extract! teaching, :name, :position
  json.url teaching_url(teaching, format: :json)
end