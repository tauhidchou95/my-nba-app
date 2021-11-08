import { data_teams } from '../../JSON-Data/data_teams'

export default function handler(req, res) {
    res.status(200).json(data_teams)
  }
  