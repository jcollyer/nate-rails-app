require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Nate
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    S3_CREDENTIALS = YAML.load(File.read(File.expand_path(Rails.root.join("config","s3_credentials.yml"))))["production"]
    # AWS::S3::Base.establish_connection! S3_CREDENTIALS['connection']
    AWS::S3::Base.establish_connection!(
    :access_key_id     => S3_CREDENTIALS['access_key_id'],
    :secret_access_key => S3_CREDENTIALS['secret_access_key'],
    :persistent        => true, # from http://www.ruby-forum.com/topic/110842
  end
end
