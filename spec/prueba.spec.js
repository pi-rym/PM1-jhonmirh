//describe("demo", function () {
//  it("Este test debe pasar siempre", function () {
//    expect(4 + 2).toBe(6);
//  });
//});
//

const { Repository, Activity } = require("../scripts/index");
describe("La Clase Repository",  () => {

beforeEach( () => {
  this.repository = new Repository();
});

it('Debe ser una clase', ()=> {
  expect(typeof Repository.prototype.constructor).toBe('function');
});

it('Debe ser una clase', ()=> {
  expect(typeof Activity.prototype.constructor).toBe('function');
});

it("Debe ser una instancia de Repository", () => {
  expect(Repository instanceof Repository).toBe(true);
});

it('Debe contener un método getallActivities', ()=> {
  expect(typeof Repository.prototype.getallActivities).toBe('function');
});

it("Debe ser una instancia de Repository", () => {
      expect(repository instanceof Repository).toBe(true);
  });

it('Debe contener un método createActivity', ()=> {
 const expectedActivity={
  title: 'Actividad 1',
  description: 'Descripción de la actividad 1',
  imgUrl: 'la imagen'
 };
  repository.createActivity(
    expectedActivity.title,
    expectedActivity.description,
    expectedActivity.imgUrl
  );



  expect(repository.getallActivities().length).toBe(1);

 });


it('Debe contener un método deleteActivity', ()=> {
  expect(typeof Repository.prototype.deleteActivity).toBe('function');
});


});



