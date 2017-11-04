#!/usr/bin/env bash
npm run compile && npm run sequelize db:migrate && npm start