const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 4242;
const SECRET = process.env.JWT_SECRET || 'replace_this_with_a_random_string';

app.use(express.json());
app.use(express.static('public'));

// Load and save
