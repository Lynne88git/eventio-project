// import { Component } from 'react'
// import { Navigate } from 'react-router-dom'
// import AuthService from '../../services/auth.service'
// import IUser from '../../types/user.type'

// type Props = {
//   props: Props
// }

// type State = {
//   navigate: string | null
//   userReady: boolean
//   currentUser: IUser & { accessToken: string }
// }
// export default class UserProfile extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props)

//     this.state = {
//       navigate: null,
//       userReady: false,
//       currentUser: { accessToken: '' },
//     }
//   }

//   componentDidMount() {
//     const currentUser = AuthService.getCurrentUser()

//     if (!currentUser) this.setState({ navigate: '/home' })
//     this.setState({ currentUser: currentUser, userReady: true })
//   }

//   render() {
//     if (this.state.navigate) {
//       return <Navigate to={this.state.navigate} />
//     }

//     const { currentUser } = this.state

//     return (
//       <div className="container">
//         {this.state.userReady ? (
//           <div>
//             <h3>
//               <strong>{currentUser.firstname}</strong> Profile
//             </h3>
//             <p>
//               <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{' '}
//               ...{' '}
//               {currentUser.accessToken.substr(
//                 currentUser.accessToken.length - 20
//               )}
//             </p>
//             <p>
//               <strong>Id:</strong> {currentUser.id}
//             </p>
//             <p>
//               <strong>Email:</strong> {currentUser.email}
//             </p>
//           </div>
//         ) : null}
//       </div>
//     )
//   }
// }
