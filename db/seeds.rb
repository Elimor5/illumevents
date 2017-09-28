require 'faker'

categories = [
  "All Categories",
  "Auto, Boat & Air",
  "Business & Professional",
  "Charity & Causes",
  "Community & Culture",
  "Family & Education",
  "Fashion & Beauty",
  "Film",
  "Media & Entertainment",
  "Food & Drink",
  "Goverment & Politics",
  "Health & Wellness",
  "Hobbies & Special Interest",
  "Home & Lifestyle",
  "Music",
  "Other",
  "Performing & Visual Arts",
  "Religion & Spirituality",
  "Science & Technology",
  "Seasonal & Holiday",
  "Sports & Fitness",
  "Travel & Outdoor" ]

Bookmark.destroy_all
Event.destroy_all
User.destroy_all
TicketPurchase.destroy_all
EventTicket.destroy_all

User.create!([
  {username: "user", password_digest: "$2a$10$zdCP4rQnZ3NpsZeApnWiyOt18Luo5RWqK2Kvfb6CRtIWFRK0gNiPm", session_token: "cwAnFkGAGF1t9K62o5+vCg=="},
  {username: "Rasheed Wallace", password_digest: "$2a$10$D2j3tMDOq8NQCHGUeL4xfOabhJvTLYyvlVc9jha/y.xivoSbkdFC6", session_token: "i/5X62D9rKtEynV3lRcDBw=="},
  {username: "Charlize Theron", password_digest: "$2a$10$gg4xfjKbvvY0/FVrkK615ud/zuWbFi0NxrpaoQ3gc9XRpJA0O2a6O", session_token: "SwTMsm+gVB0BSdgEl6Vx5g=="},
  {username: "user3", password_digest: "$2a$10$DazYLPGHWQgh6EglrSMxIuoYcabOQtD46SsAFXwXNhedshJ9XMxny", session_token: "1jb0SZT4IqCLaUVxNL42yw=="},
  {username: "safasf", password_digest: "$2a$10$v1dk/r7WBO9RiOxGbCwSnu/e8YM8OW6uVqwXvJY0MjiCsjVbpRkPe", session_token: "Ad7wGMZP6lJy7A4/rp+2eQ=="},
  {username: "fgdfgsg", password_digest: "$2a$10$58PqQ9wXGi4fpzTDoU/rqegyMfK6zj0pMCgGIs6LnA76IxjbCqquW", session_token: "3WFdzbv3tSkZVLSC1XilYw=="},
  {username: "username", password_digest: "$2a$10$U6zEhEXMZOd9Rss8hA/VR./spEq6V.NA9yrXxJ4m.Che5gRbYUyVe", session_token: "ZNuQF9IR2E1befR6MZK1Ug=="},
  {username: "Richard Gere", password_digest: "$2a$10$TL8YFTPbM8bNjHdXRUuoMeIP/of837Egi/Sv/nf74YP0OFLPGXSRi", session_token: "eZyg8DDeOsYDXslVizrl/g=="}
])


Event.create!([
  {host_id: 1, title: "The NYC Annual Antique Car Show", venue: "Javitz Center", lat: 40.7577, lng: -74.0025, address: "655 W 34th S", city_state_zip: "New York, NY 10001", date: Faker::Date.between(Date.today, 1.year.from_now), time: "12:00 PM", description: "Promising to be the biggest classic car show in the area with most vehicles 25 years and older! Newer vehicles must be unique, exotic or have characteristics not usually seen on the road.\r\n\r\nLocated in New York, NY, this is a community event for all ages! \r\nRegister to get your ticket(s) and attend this spectacular showing of vehicles.\r\n\r\n\r\nGates open at 8:00am, when vehicles will arrive and be positioned. Show opens to the public at 12:00pm.\r\n\r\nThose registering with vehicles are asked to remain at the show for the full day, with departure at 5:00pm \r\nSorry, no preferred, reserved, club or specific parking. Vehicles are parked in the order that they enter the registration area. \r\nNYC Annual Car Show reserves the right to refuse vehicle entrance to the show.\r\n\r\nA trophy for most unique vehicle as well as random draws and door prizes will be presented at 4:00pm.", category: "Auto, Boat & Air", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/135/original/pexels-photo-221273-car.jpeg"},
  {host_id: 1, title: "DJ Spinner @ Club 159", lat: 40.7452, lng: -73.9939, venue: "Club a/A", address: "159 W 25th St", city_state_zip: "New York, NY 10001", date: Faker::Date.between(Date.today, 1.year.from_now), time: "5:00PM", description: "DJ Spinner will be spinning it up all night at club A/a. Come celebrate independence day with style. First 30 buyers will receive a voucher for a free beer. \r\n\r\nDJ spinner creates his unique sound by implementing JavaScript algorithms into his music creation. His blend of electrofunk and middleware thunk will drive you bonkers. \r\n\r\nDon't miss out on this opportunity to party like you've never partied before!! \r\n\r\nTickets will only be accepted at the door. Non-refundable. Limit 4 tickets per person. ", category: "Media & Entertainment", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/136/original/pexels-photo-332688-dj.jpeg"},
  {host_id: 2, title: "FC Travis vs. Wenbo United ", lat: 40.8116, lng: -74.0677, venue: "Meadowlands Arena", address: "50 NJ-120", city_state_zip: "East Rutherford, NJ 07073", date: Faker::Date.between(Date.today, 1.year.from_now), time: "8:00PM", description: "Don't miss your chance to catch a once in a lifetime opportunity to see FC Travis take on Wenbo United. Both teams are formidable on the offensive front, punishing their opponents with their sheer agility and energy. Neither teams are accustomed to losing. The winner will be the #1 seed coming in the playoffs, so this win may be the deciding factor in their push to claim glory. \r\n\r\nTickets must be purchased by July 20th. All sales final. ", category: "Sports & Fitness", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/137/original/pexels-photo-173358-soccer.jpeg"},
  {host_id: 2, title: "54th Annual Pie Eating Contest", lat: 40.7903, lng: -73.4156, venue: "Huntington Hilton Ballroom", address: "98 Broadhollow Rd", city_state_zip: "Melville, NY 11747", date: Faker::Date.between(Date.today, 1.year.from_now), time: "6:00PM", description: "Have an insatiable craving for pies?\r\nDo you like eating uncontrollably until you hate yourself?\r\nDo you have no regard for the starving people in the world, and just care about the glory associated with winning the prize of fastest pie eater? \r\n\r\nIf you answered yes to any of these questions, this event is for you!\r\n\r\nYou will be served 9 pies, each of them a different flavor.\r\n\r\nIf you can finish the pies the fastest, you will win a complementary treadmill to help burn off the weight you just gained.", category: "Food & Drink", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/138/original/pexels-photo-236749-pie.jpeg"},
  {host_id: 3, title: "Bronx Zoo Wildlife Awareness Event", lat: 40.8505, lng: -73.8769, venue: "Bronx Zoo", address: "2300 Southern Blvd", city_state_zip: "Bronx, NY 10460", date: Faker::Date.between(Date.today, 1.year.from_now), time: "1:00PM", description: "Calling all nature and animal lovers everywhere! The Bronx Zoo conservation committee will be holding a special event to raise awareness for the cruel treatment of wildlife. Our event will feature animals who have been nursed to health after being treated cruelly in the wild by hunters and poachers. ", category: "Charity & Causes", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/139/original/pexels-photo-419694-deer.jpeg"},
  {host_id: 3, title: "Smartwatch Viability Panel", lat: 40.7413, lng: -74.0032, venue: "Google NY Headquarters", address: "111 8th Ave", city_state_zip: "New York, NY 10011", date: Faker::Date.between(Date.today, 1.year.from_now), time: "7:00PM", description: "We are pleased to announce our 4th annual panel discussing the viability of the longterm smartwatch market. \r\n\r\nSmartwatches have not gained the momentum that most investors have predicted. Our panel will discuss emerging technologies and innovations, smartwatch application development, among other ways to invigorate the lacking industry. ", category: "Science & Technology", image:"https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/140/original/pexels-photo-277406-smartwatch.jpeg"},
  {host_id: 4, title: "Cherry Picking Festival", lat: 36.7449, lng: -119.7749, venue: "Orchard Grove", address: "187 Orchard Grove Way", city_state_zip: "Fresno, California, 93726", date: Faker::Date.between(Date.today, 1.year.from_now), time: "12:00PM", description: "Who doesn't love cherries? And now is the best time to get some! Cherries are at their ripest, so come on over to our Orchard and pick as many cherries as your heart desires!\r\n\r\nWe are a family owned company determined to provide only the freshest cherries to our clients. If you are in any way dissatisfied with our product, we will refund your ticket. \r\n\r\nCome on down and taste the greatest cherries your taste buds have ever encountered!", category: "Food & Drink", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/141/original/cherry-tree-fruit-nature-63312-cherry.jpeg"},
  {host_id: 5, title: "Catskills Hiking Expedition", lat: 42.0093, lng: -74.3821, venue: "Catskills Mountain Lodge ", address: "876 Catskills Lodge Road", city_state_zip: "Catskill, NY 12414", date: Faker::Date.between(Date.today, 1.year.from_now), time: "8:00AM", description: "Does your life leave you longing for more? More excitement? More thrills? More adventure? Luckily for you, we are hosting a hike around our parts of the Catskills. Prepare to see breathtaking views that will leave you mesmerized for days on end. This excursion is not for the faint of heart. You will need to walk for hours at a time, with short breaks. It will test your mental and physical endurance. But you will complete it feeling accomplished and amazed by the beauty that is the Catskills. Please consult with your doctor before purchasing tickets if you are experiencing any physical conditions hindering you from engaging in phsyical activity. ", category: "Hobbies & Special Interest", image:"https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/142/original/pexels-photo-136220-hiking.jpeg"},
  {host_id: 5, title: "Paragliding Adventure!", lat: 41.2543, lng: -74.4919, venue: "Vernon Paragliding Lodge", address: "1567 Vernon Boulevard", city_state_zip: "Vernon NJ 07418", date: Faker::Date.between(Date.today, 1.year.from_now), time: "12:00PM", description: "Get ready for one of the funnest and most exciting experiences of your life! We are offering parasailing lessons for anyone interested in living life on the edge. No previous experience necessary! Just a will to take risks and an appetite for adventure. We will be taking off from 300 feet above sea level. You will have the opportunity to see the world from a perspective you have never seen before. This is a once in a lifetime opportunity. Don't miss out!!!!", category: "Home & Lifestyle", image:"https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/143/original/pexels-photo-382177paragliding.jpeg"},
  {host_id: 3, title: "React Native Tutorial", lat: 40.7306, lng: -73.9915, venue: "Facebook NYC Headquarters", address: "770 Broadway", city_state_zip: "New York, NY 10003", date: Faker::Date.between(Date.today, 1.year.from_now), time: "8:00PM", description: "We are pleased to present a thorough tutorial on React Native. Our renowned instructor, Mark Zuckerberg's stunt double, Marcus Zuckerfield, will be demoing React Native's powerful capabilities.\n\nReact Native is a technology based on React, written in JavaScript, that can be used to create smartphone apps. \n\nReact Native is unique in that development can be done simultaneously for iOS and for Android. There is no need to create 2 separate apps to run on different platforms. \n\n Marcus is an expert in the technology and can't wait to show off React Native!", category: "Science & Technology", image: "https://s3.us-east-2.amazonaws.com/illumevents1-dev/events/images/000/000/144/original/pexels-photo-249798-coding.jpeg"}
])

500.times do
  Event.create!(
  {host_id: rand(1..5), title: Faker::MostInterestingManInTheWorld.quote, venue: Faker::University.name, address: Faker::Pokemon.location, city_state_zip: Faker::Address.city, time: "12:00 PM", date: Faker::Date.between(Date.today, 1.year.from_now), lat:40.730610, lng: -73.935242, category: categories.sample}
  )
end

EventTicket.create!([
  {ticket_type: "General Admission", price: 50, event_id: 1, max_quantity: 1000},
  {ticket_type: "Car Owner Entrance", price: 20, event_id: 1, max_quantity: 500},
  {ticket_type: "General Admission", price: 25, event_id: 1, max_quantity: 100},
  {ticket_type: "Nosebleeds", price: 5, event_id: 2, max_quantity: 300},
  {ticket_type: "Front Row", price: 100, event_id: 2, max_quantity: 50},
  {ticket_type: "Upper Deck", price: 20, event_id: 3, max_quantity: 4000},
  {ticket_type: "Middle Deck", price: 50, event_id: 3, max_quantity: 5000},
  {ticket_type: "Floor Seats", price: 100, event_id: 3, max_quantity: 2000},
  {ticket_type: "General Entry", price: 75, event_id: 4, max_quantity: 100},
  {ticket_type: "Blueberry Pie Extraveganza", price: 150, event_id: 4, max_quantity: 200},
  {ticket_type: "Early Bird", price: 10, event_id: 5, max_quantity: 500},
  {ticket_type: "General Admission", price: 25, event_id: 5, max_quantity: 1000},
  {ticket_type: "Panel Entry - Back Row", price: 27, event_id: 6, max_quantity: 300},
  {ticket_type: "Panel Entry - Front Row", price: 40, event_id: 6, max_quantity: 300},
  {ticket_type: "General Admission", price: 100, event_id: 7, max_quantity: 500},
  {ticket_type: "Employee Discount", price: 50, event_id: 7, max_quantity: 300},
  {ticket_type: "1 Day Pass", price: 30, event_id: 8, max_quantity: 500},
  {ticket_type: "3 Day Pass", price: 80, event_id: 8, max_quantity: 500},
  {ticket_type: "3 Day Hiking Trip w/ Hotel", price: 1000, event_id: 8, max_quantity: 500},
  {ticket_type: "3 Day Hiking Trip w/o Hotel", price: 650, event_id: 8, max_quantity: 500},
  {ticket_type: "1 Day Hiking Trip w/o Hotel", price: 150, event_id: 8, max_quantity: 500},
  {ticket_type: "1 Day Hiking Trip w/ Hotel", price: 250, event_id: 8, max_quantity: 500},
  {ticket_type: "General Admission", price: 150, event_id: 9, max_quantity: 1000},
  {ticket_type: "Child Price", price: 100, event_id: 9, max_quantity: 500}
  ])



TicketPurchase.create!([
  {buyer_id: 1, ticket_id: 6, purchase_quantity: 1},
  {buyer_id: 1, ticket_id: 6, purchase_quantity: 0},
  {buyer_id: 1, ticket_id: 8, purchase_quantity: 1},
  {buyer_id: 1, ticket_id: 13, purchase_quantity: 1},
  {buyer_id: 1, ticket_id: 13, purchase_quantity: 2}
])


Bookmark.create!([
  {user_id: 1, event_id: 1}
])
