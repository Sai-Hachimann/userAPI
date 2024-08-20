const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
module.exports.getAllJobs = async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
  res.status(StatusCodes.OK).json({ jobs });
};

module.exports.getJob = async (req, res, next) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) {
    throw new NotFoundError(`no job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

module.exports.createJob = async (req, res, next) => {
  req.body.createdBy = req.user.userId;
  console.log(req.user.name);
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

module.exports.updateJob = async (req, res, next) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;

  console.log(body);
  if (company === '' || position === '') {
    throw new BadRequestError('fields cannot be empty');
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({ job });
};

module.exports.deleteJob = async (req, res, next) => {
  res.send('delete jobs');
};
