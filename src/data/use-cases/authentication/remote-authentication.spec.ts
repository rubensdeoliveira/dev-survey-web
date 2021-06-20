import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from '@/data/test/mock-http-client'

describe('RemoteAuthentication',  () => {
  test('should call HttpPostClient with correct url', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})