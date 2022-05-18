import { gql } from '@apollo/client'

export const QUERY_GOALS = gql`
  query goals($email: String) {
    goals(email: $email) {
      _id
      goalText
      createdAt
      username
      reminder
      completeDate
      stepCount
      encouragementPoints
      stickers
      steps {
        _id
        createdAt
        username
        stepBody
      }
      encouragements {
        _id
        points
        username
        message
      }
    }
  }
`

export const QUERY_GOAL = gql`
  query goal($id: ID!) {
    goal(_id: $id) {
      _id
      goalText
      createdAt
      username
      reminder
      completeDate
      stepCount
      encouragementPoints
      stickers
      steps {
        _id
        createdAt
        username
        stepBody
      }
      encouragements {
        _id
        points
        username
        message
      }
    }
  }
`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      goals {
        _id
        goalText
        createdAt
        reminder
        completeDate
        stepCount
        encouragementPoints
        stickers
        steps {
          _id
          createdAt
          username
          stepBody
        }
        encouragements {
          _id
          points
          username
          message
        }
      }
    }
  }
`

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      goals {
        _id
        goalText
        createdAt
        reminder
        completeDate
        stepCount
        encouragementPoints
        stickers
        steps {
          _id
          createdAt
          username
          stepBody
        }
        encouragements {
          _id
          points
          username
          message
        }
      }
      friends {
        _id
        username
      }
    }
  }
`

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      goals {
        _id
        goalText
        createdAt
        stepCount
        encouragementPoints
        stickers
      }
    }
  }
`
