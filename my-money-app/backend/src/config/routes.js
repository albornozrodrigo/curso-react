const express = require('express')

module.exports = (server) => {
    // Base URL
    const router = express.Router()
    server.use('/api', router)

    // Rotas da aplicação
    const BillingCycle = require('../api/billing-cycle/billing-cycle-service')
    BillingCycle.register(router, '/billing-cycles')
}