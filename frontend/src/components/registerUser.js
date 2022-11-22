import React, {Component} from "react"; // component has features that is used by class component
import axios from"axios";
import './register.css'

class RegisterUser extends Component {  
         constructor(props) {
            super(props);
            this.state = {
                name: "",
                email: "",
                password: "",
                phoneNumber: "",
                address: "",
                donate: "",
                sale: "",

            }}

         handleName = (event) =>{ 
            this.setState({
                name: event.target.value,
            });
         }; 
         handleEmail = (event) =>{ 
          this.setState({
              email: event.target.value,
          });
       }; 
       handlePassword = (event) =>{ 
        this.setState({
            password: event.target.value,
        });
     }; 
         handlePhoneNumber = (event)  =>{
            this.setState({
                phoneNumber: event.target.value
            });
         } 
         handleAddress = (event)  => {
            this.setState({
                address: event.target.value
            });
         }; 
         handleDonate = (event)  => {
            this.setState({
                donate: event.target.value
            });
         };
         handleSale = (event) => {
          this.setState({
             sale: event.target.value
          });
         };
         handleSubmit = event => {
            event.preventDefault()
            const userObject = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber,
                address: this.state.address,
                donate: this.state.donate,
                sale: this.state.sale
            } ;
             axios
             .post("http://localhost:8080/users", userObject)
             .then((response) => {
                console.log(response.data);
                alert("Registration Successful")

                this.setState({
                    error: false,
                  });
                  this.props.history.push("/");
                })
                .catch((error) => {
                  console.log(error);
                  this.setState({
                    error: error,
                  });
                });
            };
            render() {
              return (
                <div className="wrapper">

                  <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                      <label htmlFor="name">Name</label><br/>
                      <input
                        type="text"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleName}
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label><br/>
                      <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label><br/>
                      <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePassword}
                      />
                    </div>
                    <div >
                      <label htmlFor="phoneNumber">Phone Number</label><br/>
                      <input
                        type="number"
                        placeholder="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handlePhoneNumber}
                      />
                    </div>
                    <div>
                      <label htmlFor="address">Address</label><br/>
                      <input
                        type="text"
                        placeholder="address"
                        value={this.state.address}
                        onChange={this.handleAddress}
                      />
                    </div>
                    <div>
                      <label htmlFor="donate">Donate</label>
                      <input
                        type="radio"
                        name="donate"
                        placeholder="donate"
                        value= {this.state.donate}
                        onChange={(event)=>{
                          this.setState({
                            donate: "yes"
                         });
                        }}
                      />
                      <label>Yes</label>
                      <input
                        type="radio"
                        name="donate"
                        placeholder="donate"
                        value= {this.state.donate}
                        onChange={(event)=>{
                          this.setState({
                            donate: "No"
                         });
                        }}
                      />
                      <label>No</label>
                    </div>
                    <div>
                      <label htmlFor="sale">Sale</label>
                      <input
                        type="radio"
                        name="sale"
                        placeholder="Sale"
                        value= {this.state.sale}
                        onChange={(event)=>{
                          this.setState({
                            sale: "yes"
                         });
                        }}
                      />
                      <label>yes</label>
                      <input
                        type="radio"
                        name="sale"
                        placeholder="Sale"
                        value= {this.state.sale}
                        onChange={(event)=>{
                          this.setState({
                            sale: "No"
                         });
                        }}

                      />
                      <label>no</label>

                    </div>
                    
                    <button>Register</button>
                    <p>Already have an account? <a href="./loginUser">login</a></p>
                  </form>
                </div>
              );
            }
          }
          
          export default RegisterUser; 