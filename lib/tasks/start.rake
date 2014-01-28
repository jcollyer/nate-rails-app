task :start => :environment do
  teaching = Teaching.all
  teaching.each do |t|
    # t.podcasturl = "https://itunes.apple.com/us/podcast/through-bible-studio-series/id797812572"
    t.podcasturl = "https://itunes.apple.com/us/podcast/calvary-monterey-audio/id216918040"
    t.save
  end
end
