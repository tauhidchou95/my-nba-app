import { data_players } from '../../JSON-Data/data_players'

export default function handler(req, res) {
    res.status(200).json(data_players)
  }
  