import Container from '../Container';

const Profile = () => (
  <Container>
    <div>
      <h1>Mis datos</h1>

      <form>
        <label htmlFor="name">
          Nombre
          <input type="text" name="name" id="name" />
        </label>
      </form>
    </div>
  </Container>
);

export default Profile;
