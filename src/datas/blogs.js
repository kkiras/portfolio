const blogs = [
  {
    id: "react-dark-light-theme-2025-10-02",
    title: "React: Tạo Dark/Light Mode bằng CSS Variables",
    date: "2025-10-02",
    tags: ["frontend"],
    content:
      "Triển khai dark/light mode trong React bằng cách định nghĩa CSS variables tại :root. Sử dụng prefers-color-scheme làm mặc định, lưu lựa chọn người dùng trong localStorage để tránh nhấp nháy khi reload. Gắn data-theme vào <html> hoặc <body> và cập nhật ngay khi mount. Có thể in-line script nhỏ trong index.html để set theme sớm, tránh hiện tượng FOUC."
  },
  {
    id: "mongodb-schema-design-2025-10-03",
    title: "MongoDB: Thiết Kế Schema Theo Truy Vấn",
    date: "2025-10-03",
    tags: ["backend"],
    content:
      "Bắt đầu từ luồng truy vấn chính trước khi chọn nhúng (embed) hay tham chiếu (reference). Nhúng giảm join nhưng tăng kích thước tài liệu; tham chiếu phù hợp với quan hệ N-N. Tạo index compound hoặc partial theo bộ lọc phổ biến. Tách dữ liệu log/analytics ra collection riêng để tránh phình dữ liệu. Kiểm thử bằng dữ liệu thật để phát hiện scan không cần thiết."
  },
  {
    id: "nextjs-firebase-auth-2025-07-10",
    title: "Next.js + Firebase Auth: Lưu Token An Toàn",
    date: "2025-07-10",
    tags: ["frontend", "backend"],
    content:
      "Kết hợp Next.js và Firebase Authentication để xác thực an toàn. Lưu token trong HTTP-only cookie để tránh XSS. Ở server, xác minh token trước khi truy cập API hoặc SSR route. Duy trì refresh token hợp lý để giảm lỗi 401. Không truyền token qua URL và tránh lưu trong localStorage."
  },
  {
    id: "fastapi-mongo-docker-2025-06-01",
    title: "FastAPI + MongoDB trên Docker: Môi Trường Dev Gọn",
    date: "2025-06-01",
    tags: ["backend"],
    content:
      "Dùng docker-compose để chạy API và MongoDB trong cùng mạng. Thêm healthcheck để chờ DB sẵn sàng trước khi app kết nối. Mount volume để giữ dữ liệu khi rebuild. Dev dùng Uvicorn reload, production chuyển sang Gunicorn. Quản lý biến môi trường qua .env và loại khỏi repo."
  },
  {
    id: "d3-force-cluster-2025-09-29",
    title: "D3-Force: Gom Cụm Cho Word Cloud",
    date: "2025-09-29",
    tags: ["frontend", "design"],
    content:
      "Kết hợp forceManyBody, forceCollide và lực tùy chỉnh để gom nhóm word cloud. Tính lại centroid mỗi tick dựa trên trung bình trọng số, điều chỉnh bán kính va chạm theo kích thước chữ để tránh chồng lấp. Dừng simulation khi tốc độ thay đổi nhỏ để tiết kiệm tài nguyên."
  },
  {
    id: "framer-motion-draggable-2025-09-27",
    title: "Framer Motion: Nền Kéo-Thả Có Quán Tính",
    date: "2025-09-27",
    tags: ["frontend", "design"],
    content:
      "Theo dõi vận tốc kéo để mô phỏng quán tính khi thả (throw). Giới hạn chuyển động trong khung chứa để tránh tràn. Lưu trạng thái tạm bằng ref thay vì state để tối ưu hiệu năng. Với nhiều phần tử, đồng bộ bằng useAnimationFrame để đạt motion mượt và ổn định."
  },
  {
    id: "ai-agent-microservices-2025-09-28",
    title: "AI Agents: Tách Thành Microservices",
    date: "2025-09-28",
    tags: ["ai", "backend"],
    content:
      "Phân tách pipeline thành các dịch vụ nhỏ: web-research, summarization và quiz-generator. Dùng JSON Schema để chuẩn hóa dữ liệu. Hàng đợi message broker hỗ trợ giao tiếp bất đồng bộ và idempotency key giúp tránh trùng tác vụ. Ghi log có trace id để theo dõi end-to-end."
  },
  {
    id: "rag-pipeline-basics-2025-07-16",
    title: "RAG: Pipeline Gọn Cho Học Liệu",
    date: "2025-07-16",
    tags: ["ai"],
    content:
      "Tải tài liệu theo mục lục, chunk theo tiêu đề để giữ ngữ cảnh. Tạo embeddings và lưu vào vector store kèm metadata. Khi truy vấn: retrieve → rerank → synthesize để có kết quả nhất quán. Đánh giá pipeline bằng bộ truy vấn chuẩn và phản hồi người dùng."
  },
  {
    id: "portfolio-color-system-2025-09-17",
    title: "Portfolio: Hệ Màu Dễ Đọc Và Nhất Quán",
    date: "2025-09-17",
    tags: ["design", "frontend"],
    content:
      "Giữ nền sáng, text có tương phản cao và màu nhấn nhất quán. Dùng palette đồng nhất cho nav, button, hover. Với nhiều nhóm màu, đảm bảo đủ khác biệt về sắc độ. Kiểm tra hiển thị trên mobile để tránh mờ chữ nhỏ hoặc lỗi màu."
  },
  {
    id: "ba-internship-15-weeks-2025-09-14",
    title: "Lập Kế Hoạch Thực Tập BA Trong 15 Tuần",
    date: "2025-09-14",
    tags: ["career"],
    content:
      "Chia thực tập BA thành các giai đoạn: khảo sát, thu thập yêu cầu, mô hình hóa, ưu tiên backlog, prototype và UAT. Mỗi tuần có mục tiêu cụ thể như BRD, mockup, biên bản họp. Tổng kết bằng bài học kinh nghiệm và đề xuất cải tiến quy trình nghiệp vụ."
  }
];

export default blogs;