15.times do
  d = Department.create(
    name: Faker::Commerce.department 
    )
    10.times do
      i = d.items.create(
        name: Faker::Commerce.product_name,
        description: Faker::Lorem.paragraph_by_chars(256, false),
        price: Faker::Commerce.price(range = 0..1000.00, as_string = false)
      )
    end
  end