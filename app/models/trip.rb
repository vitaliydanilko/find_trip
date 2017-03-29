class Trip < ApplicationRecord
  # belongs_to :user

  validates :start_location, :finish_location, :start_time, presence: true
  validates :price, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  before_save :geocode_start_location,
              :geocode_finish_location,
              :send_googlemaps_api_responce

  def self.search(start_location, finish_location, min_price, max_price)
    trips = Trip.all
    trips = trips.where(start_location: start_location) if start_location.present?
    trips = trips.where(finish_location: finish_location) if finish_location.present?
    trips = trips.where('price >= ?', min_price) if min_price.present?
    trips = trips.where('price <= ?', max_price) if max_price.present?
    trips
  end

  def geocode_start_location
    coords = Geocoder.coordinates(start_location)
    self.start_latitude = coords[0]
    self.start_longitude = coords[1]
  end

  def geocode_finish_location
    coords = Geocoder.coordinates(finish_location)
    self.finish_latitude = coords[0]
    self.finish_longitude = coords[1]
  end

  def send_googlemaps_api_responce
    key = ENV['google_maps_api_key']
    uri = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{start_latitude},#{start_longitude}&destinations=#{finish_latitude},#{finish_longitude}&mode=driving&key=#{key}"
    response = RestClient.get(uri)
    hash = JSON.parse(response.body)
    self.distance = hash.dig('rows', 0, 'elements', 0, 'distance', 'value') / 1000
    self.duration = hash.dig('rows', 0, 'elements', 0, 'duration', 'value')
    self.finish_time = Time.at(start_time + duration).to_datetime
  end
end