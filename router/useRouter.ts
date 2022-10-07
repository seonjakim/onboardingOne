function useRouter() {
  function push(newUrl: string) {
    window.location.assign(newUrl)
  }
  return {
    push
  }
}
export default useRouter