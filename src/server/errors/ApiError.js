
module.exports = class ApiError extends Error {

	status
	errors

	constructor (status, message, errors = []) {
		super(message)
		this.status = status
		this.errors = errors
	}

	static Unauthorized () {
		return new ApiError(401, 'Пользователь не авторизован')
	}

	static BadRequest(message, errors = []) {
		return new ApiError(400, message, errors)
	}

	static Forbidden(message = 'Нет доступа', errors = []) {
		return new ApiError(403, message, errors)
	}

	static InternalServer (message = 'Внутренняя ошибка сервера', errors = []) {
		return new ApiError(500, message, errors)
	}
	
}