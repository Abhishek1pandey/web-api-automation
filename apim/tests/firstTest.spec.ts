import { test , expect} from '../../common_modules/commonFixture'
import * as testdata from '../testdata/test1.json'

test('Get call', async ({ request , apiActions}) => {
    //const response = await request.get('/api/users?page=2');
    const header = {'Accept': 'application/json'}
    const param = {'abc': '123'}
    const response = await apiActions.getMethod(request, '/api/users?page=2', header)
    expect(response.ok()).toBeTruthy();
    const users = await response.json();
    expect(users.data.length).toBeGreaterThan(0);
    console.log(users.data.length)
  });

  test('json test', async ({ request , apiActions}) => {

    testdata.user.username = 'Bingo1'
    testdata.user.password = 'Bravo1'
    console.log(testdata)
    

  });