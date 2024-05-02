start-dev:
	@docker compose -f docker-compose.yml --progress tty watch

migrate-dev:
	@make database-dev-start
	@make migrate-dev-build-run
	@make migrate-dev-copy
	@make migrate-dev-cleanup
	@make database-dev-cleanup

reset-dev:
	@make database-dev-start
	@make reset-dev-build-run
	@make reset-dev-copy
	@make reset-dev-cleanup
	@make database-dev-cleanup

migrate-dev-build-run:
	@echo "Building migrate..."
	@docker build --target migrate-development -t migrate-development --build-arg ENV=development .
	@echo "Running migrate..."
	@docker run -it --network=abilimpus-development_default --name=migrate-dev migrate-development

migrate-dev-copy:
	@echo "Copying migrations..."
	@docker cp -q migrate-dev:/project/prisma ./
	@docker cp -q migrate-dev:/project/node_modules/.prisma/client ./node_modules/.prisma/

migrate-dev-cleanup:
	@echo "Removing migrate..."
	@docker rm migrate-dev
	@echo "Removing migrate image..."
	@docker rmi migrate-development

reset-dev-build-run:
	@echo "Building reset..."
	@docker build --target reset-development -t reset-development --build-arg ENV=development -q .
	@echo "Running reset..."
	@docker run -it --network=abilimpus-development_default --name=reset-dev reset-development

reset-dev-copy:
	@echo "Copying migrations..."
	@docker cp -q reset-dev:/project/prisma ./
	@docker cp -q reset-dev:/project/node_modules/.prisma/client ./node_modules/.prisma/

reset-dev-cleanup:
	@echo "Removing reset..."
	@docker rm reset-dev
	@echo "Removing reset image..."
	@docker rmi reset-development

database-dev-start:
	@echo "Starting database..."
	@docker compose -f docker-compose.yml --progress quiet up --wait -d database

database-dev-cleanup:
	@echo "Cleaning up database..."
	@docker compose -f docker-compose.yml --progress quiet down
	@docker volume prune -f

start:
	@docker compose -f docker-compose.prod.yml --progress tty up -d --build

migrate:
	@make database-start
	@make migrate-build-run
	@make migrate-copy
	@make migrate-cleanup
	@make database-cleanup

database-start:
	@echo "Starting database..."
	@docker compose -f docker-compose.prod.yml --progress quiet up -d database

database-cleanup:
	@echo "Cleaning up database..."
	@docker compose -f docker-compose.prod.yml --progress quiet down
	@docker volume prune -f

migrate-build-run:
	@echo "Building migrate..."
	@docker build --target migrate -t migrate --build-arg ENV=production .
	@echo "Running migrate..."
	@docker run -it --network=abilimpus-production_default --name=migrate migrate

migrate-copy:
	@echo "Copying migrations..."
	@docker cp -q migrate:/project/prisma ./
	@docker cp -q migrate:/project/node_modules/.prisma/client ./node_modules/.prisma/

migrate-cleanup:
	@echo "Removing migrate..."
	@docker rm migrate
	@echo "Removing migrate image..."
	@docker rmi migrate