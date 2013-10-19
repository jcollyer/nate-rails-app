require 'test_helper'

class BiblebooksControllerTest < ActionController::TestCase
  setup do
    @biblebook = biblebooks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:biblebooks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create biblebook" do
    assert_difference('Biblebook.count') do
      post :create, biblebook: { name: @biblebook.name, position: @biblebook.position, testament: @biblebook.testament }
    end

    assert_redirected_to biblebook_path(assigns(:biblebook))
  end

  test "should show biblebook" do
    get :show, id: @biblebook
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @biblebook
    assert_response :success
  end

  test "should update biblebook" do
    patch :update, id: @biblebook, biblebook: { name: @biblebook.name, position: @biblebook.position, testament: @biblebook.testament }
    assert_redirected_to biblebook_path(assigns(:biblebook))
  end

  test "should destroy biblebook" do
    assert_difference('Biblebook.count', -1) do
      delete :destroy, id: @biblebook
    end

    assert_redirected_to biblebooks_path
  end
end
