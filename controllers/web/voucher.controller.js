const Voucher = require('../../models/evoucher.model')
const moment = require('moment')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

// storage for image
const storage = multer.diskStorage({
	// destination for files
	destination: (req, file, callback) => {
		callback(null, './public/uploads')
	},

	// add back the extension
	filename: (req, file, callback) => {
		callback(null, file.originalname + '-' + Date.now())
	}
})

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 3
	}
})

const getAllVouchers = async (req, res, next) => {
	try {
		const evouchers = await Voucher.find().exec()
		res.render('index', {
			evouchers,
			moment
		})
	} catch (error) {
		next(error)
	}
}

const getAddVoucherView = (req, res, next) => {
	res.render('addVoucher')
}

const addVoucher = async (req, res, next) => {
	const data = req.body
	let voucher = await new Voucher({
		title: data.title,
		desc: data.desc,
		expire_date: data.expire_date,
		amount: data.amount,
		payment_method: data.payment_method,
		quantity: data.quantity,
		image: data.file
	})
	voucher = await voucher.save()
	res.redirect('/')
}

const getUpdateVoucherView = async (req, res, next) => {
	try {
		const id = req.params.id
		const evoucher = await Voucher.findById(id).exec()
		res.render('updateVoucher', {
			evoucher
		})
	} catch (error) {
		res.status(400).send(error.message)
	}
}

const updateVoucher = async (req, res, next) => {
	try {
		const id = req.params.id
		const data = req.body
		let voucher = await Voucher.findByIdAndUpdate(id, {
			title: data.title,
			desc: data.desc,
			expire_date: data.expire_date,
			amount: data.amount,
			payment_method: data.payment_method,
			quantity: data.quantity
		}, { new: true })

		if (!voucher) return res.status(404).send('Voucher with the given id not found')

		res.redirect('/')
	} catch (error) {
		next(error)
	}
}

const getDeleteVoucherView = async (req, res, next) => {
	try {
		const id = req.params.id
		const deleteVoucher = await Voucher.findById(id).exec()
		res.render('deleteVoucher', {
			deleteVoucher
		})
	} catch (error) {
		res.status(400).send(error.message)
		next(error)
	}
}

const deleteVoucher = async (req, res, next) => {
	try {
		const id = req.params.id
		const voucher = await Voucher.findByIdAndRemove(id)
		if (!voucher) return res.status(404).send('Voucher with the given id not found')
		res.redirect('/')
	} catch (error) {
		res.status(400).send(error.message)
		next(error)
	}
}


module.exports = {
	getAllVouchers,
	getAddVoucherView,
	addVoucher,
	getUpdateVoucherView,
	updateVoucher,
	getDeleteVoucherView,
	deleteVoucher,
	upload
}