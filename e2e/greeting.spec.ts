import { Selector } from 'testcafe'

fixture`Greeting You`
  .page`https://lollipop-onl.github.io/gh-actions-playground/`

test('Greeting for Mike', async (t) => {
  await t
    .typeText('#name', 'Mike')
    .click('button[type=submit]')
    .expect(Selector('p').textContent).contains('Mike2')
})
