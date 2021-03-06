import { Dropdown } from '../src/scripts/Dropdown';

describe('Dropdown component specification', () => {
  let handler;

  beforeEach(() => {
    handler = document.createElement('div');
    document.body.appendChild(handler);
  });

  it('should create a Dropdown component with correct properties', () => {
    const dropdownComponent = new Dropdown(handler);

    expect(dropdownComponent.handler).to.equal(handler);
  });

  it('should change class on click', () => {
    const dropdownComponent = new Dropdown(handler);

    handler.click();
    expect(dropdownComponent.handler.classList.contains(Dropdown.ACTIVE_CLASS))
    .to.be.true;

    handler.click();
    expect(dropdownComponent.handler.classList.contains(Dropdown.ACTIVE_CLASS))
    .to.be.false;
  });

  it('should remove active class when click on body', () => {
    const dropdownComponent = new Dropdown(handler);

    handler.click();
    expect(dropdownComponent.handler.classList.contains(Dropdown.ACTIVE_CLASS))
    .to.be.true;

    document.body.click();
    expect(dropdownComponent.handler.classList.contains(Dropdown.ACTIVE_CLASS))
    .to.be.false;
  });

  afterEach(() => {
    handler.remove();
    handler = null;
  });
});
