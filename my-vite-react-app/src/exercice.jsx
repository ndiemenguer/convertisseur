function fiel ({name, value ,onchange,children}){
        return <div className="form-group">
     <label htmlFor={name}>{children}</label>
     <input type="text" value={value} onchange={onchange} id={name} name={name} className="form-controle"/>
        </div>
    }



class Home extends React.Component{
    constructor (props){
      super(props)
      this.state ={
        nom:'',
        prenom:'',
        passion:'',
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
      const name = e.target.name
        const type = e.target.type
        const value = type === 'text' ? e.target.checked : e.target.value
        this.setState({
          [name]: value
        })
    }
    render () {
      console.log('render')
      return <div>
        <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"/>
        </div>
  
        <div>
          <label htmlFor="prenom">prenom</label>
          <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"/>
        </div>
  
        <div>
          <label htmlFor="passion">j'aime</label>
          <input type="text" value={this.state.passion} onChange={this.handleChange} id="passion" name="passion"/>
        </div>
        {JSON.stringify(this.state)}
      </div>
    }
  
  }