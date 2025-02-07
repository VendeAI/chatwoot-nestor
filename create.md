sudo docker compose exec rails bundle exec rails console

account = Account.create!(name: "My Account")
user = User.create!(
  email: "teste@teste.com",
  password: "Password1!",
  name: "Normal User",
  confirmed_at: Time.current
)
AccountUser.create!(
  account_id: account.id,
  user_id: user.id,
  role: AccountUser.roles['administrator']
)

account = Account.create!(name: "Admin Account")
admin = User.create!(
  email: "admin@teste.com",
  password: "Password1!",
  name: "Admin User",
  confirmed_at: Time.current
)
AccountUser.create!(
  account_id: account.id,
  user_id: admin.id,
  role: AccountUser.roles['administrator']
)

SuperAdmin.create!(
  email: "superadmin@teste.com",
  password: "Password1!",
  name: "Super Admin",
  confirmed_at: Time.current
)


sudo docker compose exec rails bundle exec rails db:chatwoot_prepare


sudo docker compose --progress=plain -f docker-compose.production.yaml build --no-cache

sudo docker compose -f docker-compose.production.yaml up -d

superadmin@teste.com
Password1!